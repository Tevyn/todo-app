describe('Setup Test', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true);
  });
  
  it('should have access to DOM elements', () => {
    const element = document.createElement('div');
    element.textContent = 'Hello World';
    document.body.appendChild(element);
    
    expect(element.textContent).toBe('Hello World');
    expect(document.body.contains(element)).toBe(true);
  });
}); 