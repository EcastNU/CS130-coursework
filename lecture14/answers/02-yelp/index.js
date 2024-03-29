
const showMatchingRestaurants = ev => {
    const location = document.querySelector('#location').value;
    const cuisine = document.querySelector('#cuisine').value;
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${cuisine}&limit=10`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(restaurants => {
            document.querySelector('.restaurants').innerHTML = '';
            for (const rest of restaurants) {
                // 2 minutes:
                // How do you output each restaurant name here:
                // <div class="restaurants"></div>
                console.log(rest.name);
                document.querySelector('.restaurants').innerHTML += `
                    <div>
                        ${rest.name}<br>
                        <img src="${rest.image_url}" />
                    </div>`;
            }
        });
};

document.querySelector('#search').addEventListener('click', showMatchingRestaurants);