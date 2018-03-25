 <template>
    <div>
    <form>

       email:    <input type="email" v-model="email" /><br>
       passward: <input type="text" placeholder="passward" v-model="passward" /><br>
        <button type="button" @click="dianji">注册</button><br>

    </form>


    </div>

    </template>

    <script>
import axios from "axios";
import router from "../router";

        export default{
            name:"wode",

            data(){
                return {
                email:"",
                passward:""
                }
            },

            methods:{
             dianji(){
               axios.post("/api",{
                email:this.email,
                passward:this.passward
               }).then(res=>{
               console.log(res);

               }).catch(error=>{

                })
              }
            }
}
    </script>

    <style lang="scss" scoped>

    </style>