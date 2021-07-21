(()=>{    
    let action = new PlugIn.Action((selection, sender) => {
        let date_lib = PlugIn.find("com.elony314.keybinding").library("date_lib");
        let todayDefaultDue = date_lib.todayDefaultDue();
        
        let all_null = true;

        for(const task of selection.tasks){
            if(task.dueDate instanceof Date){
                all_null = false;
                break;
            }
        }
        for(const proj of selection.projects){
            if(proj.dueDate instanceof Date){
                all_null = false;
                break;
            }
        }
        
        async function toggle(task){
            if(!all_null){
                task.dueDate = null;
            } else{
                task.dueDate = todayDefaultDue;
            }
        }
        
        selection.tasks.forEach(task => {
            toggle(task);
        });
        selection.projects.forEach(proj => {
            toggle(proj);
        });

    });
    
    action.validate = (selection, sender) => {
        return (app.platformName === "macOS" && (selection.tasks.length > 0 || selection.projects.length > 0));
    };
    
    return action;
})();