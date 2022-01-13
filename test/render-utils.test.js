import { renderMember } from '../clubs/render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<p class="member">me</p>`;
    
    const member = { id: 9, created_at: '2022-01-13T03:07:29.943892+00:00', name: 'me', user_id: '225350c0-311d-4db2-8d4d-233ba934104c', club_id: 2 };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMember(member);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
