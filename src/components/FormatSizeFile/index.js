export default (_size, _to, _of = 'b') => {
    const units = [ 'b', 'kb', 'mb', 'gb', 'tb', ]
    let size = _size
    const to = units.indexOf(_to)
    const of = units.indexOf(_of)

    if (to === of) return size

    if (to === -1 || of === -1) {
        const error = '@desco/format-size-file: Invalid _to or _of parameter. Accepts: ' +
            units.join(', ')

        console.log(Error(error))

        return -1
    }

    const distance = to - of
    const operator = distance > 0 ? '*' : '/'

    for (let c = 0, l = distance > 0 ? distance : distance * -1; c < l; c++) {
        if (operator === '*') {
            size *= 1024
        } else {
            size /= 1024
        }
    }

    return size
}