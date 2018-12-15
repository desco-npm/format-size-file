<template>
    <div class="hello">
    </div>
</template>

<script>
import formatSizeFile from './FormatSizeFile'
// import formatSizeFile from '@desco/format-size-file'

export default {
    name: 'HelloWorld',
    mounted () {
        console.log(formatSizeFile(1, 'mb', 'kb'))
    },
}
</script>