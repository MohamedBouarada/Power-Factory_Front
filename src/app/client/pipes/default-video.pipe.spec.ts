import { DefaultVideoPipe } from './default-video.pipe';

describe('DefaultVideoPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultVideoPipe();
    expect(pipe).toBeTruthy();
  });
});
