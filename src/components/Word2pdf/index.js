import React, { Component } from 'react'
const word2pdf = require('word2pdf')
const fs = require('fs');
class Word2pdf extends Component {
    async change() {
        var reader = new FileReader();
        var AllowImgFileSize = 2100000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
        var file = document.getElementById('input').files[0];
        reader.readAsDataURL(file);
        reader.onload = function () {
            // fetch("http://mirror1.convertonlinefree.com", {
            //     method: "POST",
            //     mode: 'no-cors',
            //     headers: {
            //         'User-Agent':
            //             'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36'
            //     },
            //     body: JSON.stringify(form)
            // }).then(function (response) {
            //     console.log(response)
            // });
        }
    }
    render() {
        return (
            <div>
                <input onChange={this.change.bind(this)} id="input" type="file" />
            </div>
        );
    }
}
export default Word2pdf