class controllerclass {
    static get_session_info = (req, res) => {
        console.log(req.session)
        console.log(req.session.id)
        console.log(req.session.cookie)
        console.log(req.session.cookie.maxAge)
        console.log(req.session.cookie.originalMaxAge)
        console.log(req.sessionID)
        res.send("<h1>session info")
    }
    static delete_session = (req, res) => {
        req.session.destroy(() => {
            console.log("session deleted successfully");
            // console.log(`${req.session.id}`)
        })
        res.send("session deleted")
    }
    static regn_session = (req, res) => {
        req.session.regenerate(() => {
            console.log("session regenerated")
            console.log(req.session.id)
        })
        res.send("session regenreated");
    }
    static session_counter = (req, res) => {
        req.session.device = "Mobile";
        if (req.session.count) {
            req.session.count++;
        } else {
            req.session.count = 1;
        }
        res.send(`Count: ${req.session.count}`);
    }
    static get_session_data = (req, res) => {
        if (req.session.device) {
            res.send(`Device : ${req.session.device} Count :${req.session.count} `)
        }
        else{
            res.send("Device not found");
        }
    }
}

export default controllerclass;