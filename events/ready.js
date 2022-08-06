module.exports = (client) => {
    console.log(`${client.user.tag} ismi ile giriş yapıldı`);
        client.user.setPresence({activities: [{name:'Glazy v14 | /yardım'}], status:'online'})
    
};
