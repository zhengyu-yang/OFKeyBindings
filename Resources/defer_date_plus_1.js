(()=>{    
    let action = new PlugIn.Action((selection, sender) => {
        let date_lib = PlugIn.find("com.elony314.keybinding").library("date_lib");
        
        async function p1defer(task){
            if (task.deferDate!==null){
                task.deferDate = date_lib.addDays(task.deferDate, 1);
            }else{
                task.deferDate = date_lib.todayDefaultDefer();
            }
        }
        
        selection.tasks.forEach(task => {
            p1defer(task);
        });
    });
    
    action.validate = (selection, sender) => {
        return (app.platformName === "macOS" && selection.tasks.length > 0);
    };
    
    return action;
})();