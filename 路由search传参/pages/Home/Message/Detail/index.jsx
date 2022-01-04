// import { useParams } from 'react-router-dom';
import React from 'react'
// import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
const qs = require('qs');
export default function Detail() {
    // Hook的使用【方法一】
    // const {search} = useLocation();


    // 【方法二】
    const [searchParams] = useSearchParams()
// console.log(searchParams.get('id'),searchParams.get('title'));
const id = searchParams.get('id')
const title = searchParams.get('title')
    const data = [
        {id:'01',content:'你好，01'},
        {id:'02',content:'你好，02'},
        {id:'03',content:'你好，03'}
    ]

    // Params方法
    // const params = useParams()
    // console.log(params);


    // Search传参方法一
    // let result = qs.parse(search.replace('?',''))
    // let result = qs.parse(search.slice(1))
    // const {id,title} = result
    // console.log(id,title);
    return (
       <div>
           <h3>测试</h3>
           <ul>
               {/* Params接收值 */}
                {/* <li>ID:{params.id}</li>
                <li>TITLE:{params.title}</li>
                <li>CONTENT:{data.find(ele=>{ return ele.id===params.id}).content}</li> */}

                {/* Search接收值 */}
               <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{data.find(ele=>{ return ele.id===id}).content}</li>


            </ul>
       </div>
    )
}

