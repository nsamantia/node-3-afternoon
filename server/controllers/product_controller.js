module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, despriction, price, image_url} = req.body

        dbInstance.create_product()
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Somethign went Srong."});
            console.log(err)
        })
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.read_product()
        .then( product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        })
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        })
    },
 

    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params, query} = req;

        dbInstance.update_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Somethign went wrong."})
            console.log(err)
        })
    },
    
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.delete_product()
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        })
    },


}