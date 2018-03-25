    <template>
    <div>


        <router-view></router-view>

    </div>

    </template>

    <script>
import axios from "axios";
        export default{
            name:"chengshi",

            data(){
                return {

                }
            },
            mounted(){
                axios.get("v4/api/city?__t=1521682254879").then(res=>{
                console.log(res.data);
                })
            }
        }
    </script>

    <style lang="scss" scoped>

    </style>