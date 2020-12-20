(()=>{    
    let action = new PlugIn.Action((selection, sender) => {
        let date_lib = PlugIn.find("com.elony314.keybinding").library("date_lib");
        
        async function p1due(task){
            if (task.dueDate!==null){
                task.dueDate = date_lib.addDays(task.dueDate, 1);
            }else{
                task.dueDate = date_lib.todayDefaultDue();
            }
        }
        
        selection.tasks.forEach(task => {
            p1due(task);
        });
        selection.projects.forEach(proj => {
            p1due(proj);
        });

    });
    
    action.validate = (selection, sender) => {
        return (app.platformName === "macOS" && (selection.tasks.length > 0 || selection.projects.length > 0));
    };
    
    return action;
})();