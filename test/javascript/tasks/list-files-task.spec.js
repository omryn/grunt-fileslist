"use strict";
describe('grunt-list-files task', function(){
    describe('acceptance', function(){
        describe('when going over resources/skins', function(){
            it('should create a files list with item and list templates', function(done){
                expect('target/result.xml').toHaveSameContentAs('test/expected/expected.xml',done);
            });
        });
    });
});