(() => {
    let date_lib = new PlugIn.Library(new Version("1.0"));
    
    date_lib.todayDefaultDue = () => {
        const today = new Date();
        let [hh, mm, ss] = settings.objectForKey("DefaultDueTime").split(":");
        today.setHours(hh, mm, ss, 0);
        return today;
    };

    date_lib.todayDefaultDefer = () => {
        const today = new Date();
        let [hh, mm] = settings.objectForKey("DefaultStartTime").split(":");
        today.setHours(hh, mm, 0, 0);
        return today;
    };

    
    date_lib.addDays = (date_x, days) => {
        var date = new Date(date_x.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };

    return date_lib;    
})();