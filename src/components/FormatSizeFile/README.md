# @desco/format-size-file

> Convert file sizes

## Install

``` bash
npm install --save @desco/format-size-file
```

## Use

``` js
import formatSizeFile from '@desco/format-size-file'

const size = 2.5
const to = 'tb'
const of = 'kb'

console.log(
  // Accepted units are:: 'b', 'kb', 'mb', 'gb' and 'tb'
  // 'of' parameter is optional. Default is 'b'.
  // Returns -1 if you enter invalid unit
  formatSizeFile(size, to, of)
)
```