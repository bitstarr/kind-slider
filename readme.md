# `<kind-slider>`

A web component to have a kind, CSS driven image or element slider. The CSS technique for aligning with the content wrapping is based on the [case study from Smashing Magazine](https://www.smashingmagazine.com/2023/12/css-scroll-snapping-aligned-global-page-layout-case-study/).

The only thing we need JavaScript for, are the optinal buttons to scroll the slider left and right. The component will create these for you, but you can also provide their markup by your self.

This is not 100% out-of-the-box ready, since you might want to alter the CSS to fit to your enviroment.

[Check out the Demo](https://bitstarr.github.io/kind-slider/demo.html)

## Usage

```html
<script type="module" src="kind-slider.js"></script>
<link rel="stylesheet" href="kind-slider.css">

<kind-slider class="kind-slider" controls label-next="Slide Forward" label-prev="Slide Backward">
    <div class="ks-track" data-track>
        <div class="ks-item">
            <img
                class="image"
                src="https://picsum.photos/333/500?random=1"
                width=333
                height=500
                alt="Random Image from Unsplash"
            >
        </div>
                <div class="ks-item">
            <img
                class="image"
                src="https://picsum.photos/333/500?random=2"
                width=640
                height=500
                alt="Another random Image from Unsplash"
            >
        </div>
        […]
    </div>
</kind-slider>
```

If you dont need controls, you can omit the `controls` and `label-` attributes. In case you make use of the component created controls, please provide the `label-next` and `label-prev` attributes. They will be set as `aria-label` for the buttons and provide screenreaders a readable label.

### Custom controls

```html
<kind-slider class="kind-slider" controls>
    <div class="ks-track" data-track>
        […]
    </div>
    <div class="ks-actions" hidden>
        <button class="ks-action" data-direction="prev" aria-label="slide backwards">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon" role="img" aria-hidden="true" preserveAspectRatio="xMinYMin">
            <path d="M26 5L16 16l10 11-4 4L8 16 22 1l4 4z"></path>
            </svg>
        </button>
        <button class="ks-action" data-direction="next" aria-label="slide forwards">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="currentcolor" class="icon" role="img" aria-hidden="true" preserveAspectRatio="xMinYMin">
            <path d="M12 1l14 15-14 15-4-4 10-11L8 5z"></path>
            </svg>
        </button>
    </div>
</kind-slider>
```

Make sure to set the `controls` attribute for the component and `data-direction` for the buttons. I recommend using the `hidden` attribute for the component to take care for the case of faulty or disabled JavaScript. The component will remove the `hidden` attribute when it initializes.

## About Styling

On desktop systems you are likely to see the scrollbar all the time. If you feel uncomfortable with the way this looks, consider adding a background to the whole slider area to incorporate it optically.

Since this components functionality relies heavily on the CSS you really should read that Smashing Magazin article. The CSS might not fit out of teh box to your project, so please don't hesitate to copy the CSS file to your code base and modify it to your requirements. Especially the wrapping width and body padding (look out for media queries) are very individual.