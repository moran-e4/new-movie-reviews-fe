import { Injectable } from '@angular/core';

/**
 * Service to handle data operations.
 */
@Injectable( {
  providedIn: 'root'
})
export class DataService {

  /**
   * Gets the last page number for pagination.
   * @returns The last page number.
   */
  getLastPageNumber() {
    return 100;
  }


}
