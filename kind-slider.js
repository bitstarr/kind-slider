class KindSlider extends HTMLElement
{
    static tagName = 'kind-slider';

    constructor()
    {
        super();
        // element created
    }

    connectedCallback()
    {
        // browser calls this method when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)

        // do we need a button navigation?
        if ( !this.hasAttribute( 'controls' ) ) {
            return;
        }

        // collect some information for later
        const track = this.querySelector( '[data-track]' );
        const itemCount = track.children.length;

        // check if the buttons already exist. If not create them.
        let buttons = this.querySelectorAll( 'button[data-direction]' );
        if ( !buttons.length )
        {
            // create new actions
            buttons = this.createButtons();
        }
        else {
            // remove hidden from actions node
            this.querySelector( 'button[data-direction]' ).parentNode.hidden = false;
        }

        // set event listeneres
        buttons.forEach( button =>
            {
                button.addEventListener( 'click', function( e )
                {
                    let direction = e.currentTarget.dataset.direction;
                    direction = ( direction == 'next' ) ? 1 : -1;
                    track.scrollBy( {
                        // the offset is more a rough estimae, considering unequal item widths
                        left: ( track.scrollWidth / itemCount ) * direction,
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        );

    }

    createButtons()
    {
        let actions = document.createElement( 'div' );
        actions.classList.add( 'ks-actions' );

        let prev = document.createElement( 'button' );
        prev.classList.add( 'ks-action' );
        prev.dataset.direction = 'prev';
        prev.dataset.generated = 'true';
        if ( this.getAttribute( 'label-prev' ) )
        {
            prev.setAttribute( 'aria-label', this.getAttribute( 'label-prev' ) );
        }

        let next = prev.cloneNode(true);
        next.dataset.direction = 'next';
        if ( this.getAttribute( 'label-next' ) )
        {
            next.setAttribute( 'aria-label', this.getAttribute( 'label-next' ) );
        }

        actions.appendChild( prev );
        actions.appendChild( next );
        this.appendChild( actions );

        return actions.querySelectorAll( 'button[data-direction]' );
    }
}

if ( 'customElements' in window ) {
	customElements.define( KindSlider.tagName, KindSlider );
}