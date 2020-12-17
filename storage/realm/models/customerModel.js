export default class CustomerModel {

static getCustomerModelName(){
    return CustomerModel.schema.name;
}

static PrimaryKey(){
    return CustomerModel.schema.primarykey;
}

static schema = {
        'name':"customer",
        'primarykey':"_id",
        'properties':{
            '_id':"int",
            'name':"string",
            'address':"string",
            'imageaddress':"string",
        }
    }
}


// @typeof()

export type CustomerModelTypeInterface = {
    _id:Number,
    name:String,
    address:String,
    imageaddress:String,
}