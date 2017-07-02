import {version} from '../../package.json';
import {Router} from 'express';
import facets from './facets';
let dots = require("dot").process({
    path: (__dirname + "/../templates")
});

export default ({config, db}) => {
    let api = Router();

    // mount the facets resource
    //api.use('/facets', facets({config, db}));

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.json({version});
    });

    api.get('/template', function(req, res){
        res.send(dots.hello({
            name: "Javier"
        }));
    });

    return api;
}
