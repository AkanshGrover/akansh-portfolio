async function getProjects(){
    try{
        const response = await fetch("https://api.github.com/users/AkanshGrover/repos");
        const data = await response.json();

        const fdata = [];

        for (const key in data){
            const cur = data[key];
            const temp = {name: cur["name"].replace(/[_-]/g, " "), gitl: cur["html_url"], desc: cur["description"], tech:cur["topics"], pushed_at: cur["pushed_at"]};
            if (temp["desc"] != null & temp["name"] != "AkanshGrover"){
                fdata.push(temp)
            }
        }
        
        fdata.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        return fdata;
    }
    catch (error){
        return []
    }
}

export default getProjects