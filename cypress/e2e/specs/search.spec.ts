import PlaylistPage from "../../pageobjects/Playlist.page"
import MainPage from "../../pageobjects/MainPage.page"

describe('Test Case 1,2,3', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

  it('Should test search functionality', () => {
    PlaylistPage.fillSearchInput(Cypress.env('track_name'))
    PlaylistPage.winterTrack.should('be.visible');
    PlaylistPage.summerTrack.should('not.exist');
    PlaylistPage.autumnTrack.should('not.exist');
    PlaylistPage.rainyTrack.should('not.exist');
    PlaylistPage.springTrack.should('not.exist');
  })

  it('Should test adding track to playlist functionality', () => {
    PlaylistPage.clickPlusBtn()
    PlaylistPage.yourPlaylistTrack.should('be.visible')
    
  })

  it('Should test rotal duration of playlist in seconds', () => {
    PlaylistPage.clickAllPlusBtn()
    PlaylistPage.playlistDuration.should('have.text',1030)
    //manually counted total duration of all tracks in seconds
  })

})
