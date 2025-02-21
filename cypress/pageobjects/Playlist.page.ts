class PlaylistPage {
    get searchInput(){
        return cy.get("input[type='text']")
    }
    get winterTrack(){
        return cy.xpath("//p[text()='Winter Winds']") 
    }
    get summerTrack(){
        return cy.xpath("//p[text()='Summer Breeze']") 
    }
    get autumnTrack(){
        return cy.xpath("//p[text()='Autumn Leaves']") 
    }
    get springTrack(){
        return cy.xpath("//p[text()='Spring Dance']") 
    }
    get rainyTrack(){
        return cy.xpath("//p[text()='Rainy Mood']") 
    }
    get plusBtn(){
        return cy.get("button:contains('+')")
    }
    get yourPlaylistTrack(){
        return cy.get("#playlist>div>div:contains('Summer Breeze')")
    }
    get playlistDuration(){
        return cy.get("#playlist-duration")
    }


    fillSearchInput(track_name:string){
        this.searchInput.type(track_name);
        
    }

    clickPlusBtn(){
        this.plusBtn.eq(0).click();
    }

    clickAllPlusBtn(){
        this.plusBtn.each(($btn) => {
            cy.wrap($btn).click().wait(500);
        });
    }


}
export default new PlaylistPage();