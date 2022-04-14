const updates = Vue.createApp({
    data(){
        return{
            name:"vue framework f",
            subscribeText: "Subscribe Now",
            persons:[
                {names:'John Doe', gender:'Male', email:'JohnDoeX@.com', src:'https://randomuser.me/api/portraits/men/10.jpg'},
                {names:'Jane Humble', gender:'Female', email:'JaneDoeX@.com', src:'https://randomuser.me/api/portraits/women/10.jpg'},
                {names:'Kamsi Doe', gender:'Male', email:'KamsiDoeX@.com', src:'https://randomuser.me/api/portraits/men/11.jpg'},
                {names:'Tochi Crumble', gender:'Female', email:'TochiDoeX@.com', src:'https://randomuser.me/api/portraits/women/11.jpg'},
                {names:'Edie Doe', gender:'Male', email:'EdieDoeX@.com', src:'https://randomuser.me/api/portraits/men/12.jpg'},
                {names:'Cara Timble', gender:'Female', email:'CaraDoeX@.com', src:'https://randomuser.me/api/portraits/women/12.jpg'}
            ],
        };
    },
});

updates.mount("#app");


let profile;

const fetchUser = async () => {
    const res = await axios.get('https://randomuser.me/api/?results=10')    
    console.log(res);    
    profile = res.data.results;
    console.log(profile)
}


fetchUser();

if(typeof(profile) === "undefined"){
    return;
  }
else {const facebook = Vue.createApp({
    data(){
        return{
            name:"vue framework",
            subscribeText: "Subscribe Now",
            persons:[profile],
        };
    },
});

facebook.mount("#facebook");}