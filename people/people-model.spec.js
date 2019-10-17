const request = require('supertest')

// const server = require('../index')

const db = require('../data/dbConfig')

const People = require('./people-model')

// const request = require('supertest')

describe('People model', () => {

    describe('insert()', () => {
        beforeEach(async () => {
            await db ('people').truncate()
        })
        it('should insert to db', async () => {
            let person = await People.insert({ name: "bob" });
            expect(person.name).toBe('bob')

            let person2 = await People.insert({ name: "avril" });
            expect(person2.name).toBe('avril')
        })
    })
    describe('insert count', () => {
        it('should count db inserts', async () => {
            
    
            const people = await db('people')
            expect(people).toHaveLength(2)
        })
    })
})

describe('remove()', () => {
    it('should see if it has deleted', async () => {
        let deleted = await People.remove({name: "bob"});
        expect(deleted).toBe(0)
    })

    describe('remove() part 2', () => {
        beforeEach(async () => {
            await db ('people').truncate()
        })
        it('should count number of people', async () => {
            let person = await People.insert({ name: "bobby" });
            expect(person.name).toBe('bobby')

            let person2 = await People.insert({ name: "tristan" });
            expect(person2.name).toBe('tristan')

            console.log('before', People.length, People)
            await People.remove(1);
            console.log('after', People.length, People)


            const deleted = await db('people')
            expect(deleted).toHaveLength(1)
        })
    })
    
})  