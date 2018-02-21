$(function(){
    $.get('lyric.json').then(function(object){
        let {lyric}= object
        let array= lyric.split('\n')//将歌词的每一句分割出来 数组
        let regex= /^\[(.+)\](.*)/
        array= array.map(function(string){// map 遍历
            let matches= string.match(regex)
            if(matches){
                return {time: matches[1], words: matches[2]}
            }
        })
        let $lyric= $('.lyric')
        array.map(function(object){
            if(!object){return } //找不到对象时 return
            let $p= $('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })
})

    let audio= document.createElement('audio')
    audio.src="http://dl.stream.qqmusic.qq.com/C400000DltsM4gJHXv.m4a?guid=5190451814&vkey=BBD17A4016A99FB937144FC2BDA881894EF7FFD2888559B6BCA6494E11833CF9D69910FA117BFFB836AA3334D396ABAAF65FCB6356200583&uin=0&fromtag=999"
    audio.oncanplay= function(){
        audio.play()
        $('.disc-container').addClass('playing') 

    }
    $('.icon-pause').on('touchstart', function(){
        audio.pause()
        $('.disc-container').removeClass('playing')

    })
    $('.icon-play').on('touchstart', function(){
        audio.play()
        $('.disc-container').addClass('playing')

    })
