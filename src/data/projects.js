import pBackup from "./projectsBackup.json"

async function getProjectsInfo(){
    try{
        const response = await fetch("https://api.github.com/users/AkanshGrover/repos");
        if (!response.ok) {
            throw new Error("Failed to fetch from github api");
        }

        const data = await response.json();

        const pdata = [];

        for (const repo of data){
            const temp = {name: repo.name.replace(/[_-]/g, " "), gitl: repo.html_url, desc: repo.description, tech: repo.topics, pushed_at: repo.pushed_at};
            if (temp.desc != null && temp.name != "AkanshGrover"){
                pdata.push(temp);
            }
        }
        
        pdata.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        return {lastUpdated: new Date().toLocaleString("en-IN", {dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata"}), pdata};
    }
    catch (error){
        console.log("github fetch failed, trying backup json")
        return pBackup;
    }
}

export default getProjectsInfo