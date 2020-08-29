(()=>{    
    let action = new PlugIn.Action((selection, sender) => {
        let date_lib = PlugIn.find("com.elony314.keybinding").library("date_lib");
        let todayDefaultDefer = date_lib.todayDefaultDefer();
        
        let all_null = true;
        
        for(const task of selection.tasks){
            if(task.deferDate instanceof Date){
                all_null = false;
                break;
            }
        }
        
        async function toggle(task){
            if(!all_null){
                task.deferDate = null;
            } else{
                task.deferDate = todayDefaultDefer;
            }
        }
        
        selection.tasks.forEach(task => {
            toggle(task);
        });
    });
    
    action.validate = (selection, sender) => {
        return (app.platformName === "macOS" && selection.tasks.length > 0);
    };
    
    return action;
})();