const enc = new TextEncoder()
const clean = (value) => String(value ?? '').normalize('NFKD').replace(/[^\x20-\x7E]/g, ' ').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

function makePdf(pages, pageLinks) {
  const objects = []
  const add = (value) => { objects.push(value); return objects.length }
  const catalog = add('')
  const pageTree = add('')
  const regular = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
  const bold = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')
  const pageIds = []

  pages.forEach((commands, index) => {
    const stream = commands.join('\n')
    const streamId = add('<< /Length ' + enc.encode(stream).length + ' >>\nstream\n' + stream + '\nendstream')
    const annotations = (pageLinks[index] || []).map((link) => add(
      '<< /Type /Annot /Subtype /Link /Rect [' + link.x + ' ' + (link.y - 3) + ' ' + (link.x + link.width) + ' ' + (link.y + link.size + 3) + '] /Border [0 0 0] /A << /S /URI /URI (' + clean(link.url) + ') >> >>'
    ))
    const annots = annotations.length ? ' /Annots [' + annotations.map((id) => id + ' 0 R').join(' ') + ']' : ''
    pageIds.push(add('<< /Type /Page /Parent ' + pageTree + ' 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ' + regular + ' 0 R /F2 ' + bold + ' 0 R >> >> /Contents ' + streamId + ' 0 R' + annots + ' >>'))
  })

  objects[catalog - 1] = '<< /Type /Catalog /Pages ' + pageTree + ' 0 R >>'
  objects[pageTree - 1] = '<< /Type /Pages /Kids [' + pageIds.map((id) => id + ' 0 R').join(' ') + '] /Count ' + pageIds.length + ' >>'

  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  objects.forEach((object, index) => {
    offsets.push(enc.encode(pdf).length)
    pdf += (index + 1) + ' 0 obj\n' + object + '\nendobj\n'
  })
  const xref = enc.encode(pdf).length
  pdf += 'xref\n0 ' + (objects.length + 1) + '\n0000000000 65535 f \n'
  offsets.slice(1).forEach((offset) => { pdf += String(offset).padStart(10, '0') + ' 00000 n \n' })
  pdf += 'trailer\n<< /Size ' + (objects.length + 1) + ' /Root ' + catalog + ' 0 R >>\nstartxref\n' + xref + '\n%%EOF'
  return new Blob([enc.encode(pdf)], { type: 'application/pdf' })
}

export function generateCV({ profile, experience, education, projects, skills, certifications }) {
  const pages = []
  const pageLinks = []
  let page = []
  let links = []
  let y = 0

  const text = (value, x, top, size, isBold = false, color = '0.16 0.20 0.25') => {
    page.push(color + ' rg BT /' + (isBold ? 'F2' : 'F1') + ' ' + size + ' Tf ' + x + ' ' + top + ' Td (' + clean(value) + ') Tj ET')
  }
  const linkText = (label, url, x, top, size = 8) => {
    text(label, x, top, size, false, '0.10 0.55 0.58')
    links.push({ x, y: top, size, width: Math.max(label.length * size * 0.53, 20), url })
  }
  const newPage = (first = false) => {
    page = []
    links = []
    pages.push(page)
    pageLinks.push(links)
    if (first) {
      page.push('0.055 0.105 0.18 rg 0 704 595 138 re f', '0.10 0.68 0.67 rg 48 690 52 4 re f')
      text(profile.name, 48, 786, 25, true, '1 1 1')
      text(profile.headline, 48, 758, 11, false, '0.78 0.86 0.91')
      text(profile.location + '  |  ' + profile.email, 48, 733, 9, false, '1 1 1')
      linkText('Portfolio', profile.portfolio, 48, 716, 8)
      linkText('GitHub', profile.github, 112, 716, 8)
      linkText('LinkedIn', profile.linkedin, 164, 716, 8)
      linkText('Email', 'mailto:' + profile.email, 224, 716, 8)
      y = 674
    } else {
      page.push('0.055 0.105 0.18 rg 0 795 595 47 re f')
      text(profile.name + '  |  Curriculum Vitae', 48, 814, 11, true, '1 1 1')
      y = 770
    }
  }
  const space = (height) => { if (y - height < 52) newPage(false) }
  const wrap = (value, max = 105) => {
    const words = String(value || '').split(/\s+/)
    const lines = []
    let line = ''
    words.forEach((word) => {
      const next = line ? line + ' ' + word : word
      if (next.length > max && line) { lines.push(line); line = word } else line = next
    })
    if (line) lines.push(line)
    return lines
  }
  const paragraph = (value, size = 8.5, max = 105) => {
    const lines = wrap(value, max)
    space(lines.length * 12 + 4)
    lines.forEach((line) => { text(line, 48, y, size); y -= 12 })
    y -= 4
  }
  const section = (title) => {
    space(34); y -= 7
    text(title.toUpperCase(), 48, y, 10, true, '0.04 0.30 0.37')
    y -= 5
    page.push('0.10 0.68 0.67 RG 48 ' + y + ' m 547 ' + y + ' l S')
    y -= 17
  }
  const item = (title, subtitle, detail) => {
    space(48); text(title, 48, y, 9.2, true, '0.10 0.14 0.20'); y -= 13
    if (subtitle) { text(subtitle, 48, y, 8, false, '0.25 0.38 0.43'); y -= 12 }
    if (detail) paragraph(detail, 8.1, 105)
  }

  newPage(true)
  section('Professional profile')
  paragraph(profile.summary, 8.7)
  section('Technical skills')
  paragraph(skills.join('  |  '), 8.3, 108)
  section('Professional experience')
  experience.forEach((role) => item(role.role, role.organisation + '  |  ' + role.dates, role.detail))
  section('Selected projects')
  projects.forEach((project) => item(project.title, project.tech, project.description))
  section('Education')
  education.forEach((entry) => item(entry.qualification, entry.institution, entry.dates))
  section('Certifications')
  certifications.forEach((cert) => paragraph(cert.title, 8.2))

  const url = URL.createObjectURL(makePdf(pages, pageLinks))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'Anele_Simbela_CV.pdf'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
