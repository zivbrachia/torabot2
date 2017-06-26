import { TestBed, inject } from '@angular/core/testing';

import { ChatManagerService } from './chat-manager.service';

describe('ChatManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatManagerService]
    });
  });

  it('should be created', inject([ChatManagerService], (service: ChatManagerService) => {
    expect(service).toBeTruthy();
  }));
});
