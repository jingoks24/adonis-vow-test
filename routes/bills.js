'use strict'

const Router = use('Route')

Router.group(()=>{
    Router.post('add-new', 'BillController.addNew')
}).prefix('bill')