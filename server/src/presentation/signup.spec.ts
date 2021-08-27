import { SignupController } from './controllers/signup'

describe('Signup Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new SignupController()
    const httRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
