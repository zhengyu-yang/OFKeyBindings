(()=>{    
    let action = new PlugIn.Action((selection, sender) => {
        let date_lib = PlugIn.find("com.elony314.keybinding").library("date_lib");
        
        async function m1due(task){
            if (task.dueDate!==null){
                task.dueDate = date_lib.addDays(task.dueDate, -1);
            }else{
                task.dueDate = date_lib.todayDefaultDue();
            }
        }
        
        selection.tasks.forEach(task => {
            m1due(task);
        });
    });
    
    action.validate = (selection, sender) => {
        return (app.platformName === "macOS" && selection.tasks.length > 0);
    };
    
    return action;
})();