'use strict'

const Factory = use('Factory')
const { test, trait } = use('Test/Suite')('Create Bills')

trait('Test/ApiClient')
trait('Auth/Client')

test('Add New Monthly Bill without Date', async ({ assert, client }) => {
    const bill = await Factory.model('App/Models/Bill').create()

    const data = {
        name: 'Meralco',
        occurance: 'Monthly'
    }
    const response = await client.post('/bill/add-new').send(data).end()
    console.log('error', response.error)
    response.assertStatus(201)
    response.assertJSONSubset({
        name: data.title,
        occurance: data.occurance,
        bill_id: '',
    })
})