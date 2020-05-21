const request = require('supertest');
const express = require('express');

jest.setTimeout(90000)

let req = request('https://jsonplaceholder.typicode.com/')

describe('Runs the test for the url', () => {

    it('200 responce for comments',function(done){
        req
        .get('posts/1/comments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('201 responce for comments', function(done) {
        req
          .post('posts/1/comments')
          .send({postId: 1, id: 1, name: 'name', email: 'test@test.com', body: 'test'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
      it('201 responce for a post', function(done) {
        req
          .post('users/1/albums')
          .send({userId: 1, id: 1, title:'title1'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });

  