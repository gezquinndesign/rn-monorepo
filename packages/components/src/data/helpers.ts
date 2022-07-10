import data from './ngarinyin'

const slugify = (str = '') => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const findCollection = (collection:any, name:string) => {
  if (!collection) {
    return null
  }
  return collection.find((c:any) => c.name === name)
}
const findMember = (collection:any, id:string) => {
  return collection.find((m:any) => slugify(m.english) === id)
}

const getItem = (id:string, c0 = '', c1 = '', c2 = '', c3 = '') => {
  const t0 = findCollection(data.fieldguide.collections, c0),
    t1 = t0 && findCollection(t0.collections, c1),
    t2 = t1 && findCollection(t1.collections, c2),
    t3 = t2 && findCollection(t2.collections, c3)

  return (
    (t3 && t3.members && findMember(t3.members, id)) ||
    (t2 && t2.members && findMember(t2.members, id)) ||
    (t1 && t1.members && findMember(t1.members, id)) ||
    (t0 && t0.members && findMember(t0.members, id)) ||
    {}
  )
}

export { getItem, slugify }
