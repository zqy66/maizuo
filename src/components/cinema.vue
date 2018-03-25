 <template>
    <div>
    <ul>
      <li v-for="data in LIlist" @click="handleClick(data.id)" :key="data.id">
               {{data}}
            </li>
    </ul>
        <router-view></router-view>

    </div>
    </template>
    <script>
import axios from "axios";
        export default{
            name:"cinema",
            data(){
                return {
                    LIlist:["中山区","西岗区","金州区","经济开发区","普兰店","沙河口区","甘井子区","旅顺口区","瓦房店市"],
                    datalist:[],
                }
            },
            mounted(){
                axios.get("/v4/api/cinema?__t=1521700375790").then(res=>{
                    console.log(res.data)
                    this.datalist = res.data.data.cinemas
                }).catch(error=>{

                })
            },
            methods:{
                handleClick(id){
                    console.log(name)
                }
            }
        }
    </script>

    <style lang="scss" scoped>
            ul{
                li{
                    line-height:50px;
                    widht:100%;
                    background:#ccc;
                    padding-left:30px;
                }
            }
    </style>