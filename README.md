 <!--
Task for Monday:
 T̶O̶D̶O̶:̶ ̶c̶o̶n̶v̶e̶r̶t̶ ̶c̶o̶m̶p̶l̶e̶t̶e̶ ̶a̶p̶p̶ ̶i̶n̶t̶o̶ ̶h̶o̶o̶k̶s̶ ̶b̶a̶s̶e̶d̶
 T̶O̶D̶O̶:̶ ̶c̶r̶e̶a̶t̶e̶ ̶a̶ ̶t̶r̶a̶n̶s̶f̶o̶r̶m̶ ̶f̶u̶n̶c̶t̶i̶o̶n̶ ̶w̶h̶i̶c̶h̶ ̶t̶a̶k̶e̶s̶ ̶o̶n̶l̶y̶ ̶t̶h̶e̶ ̶n̶e̶c̶e̶s̶s̶a̶r̶y̶ ̶v̶a̶l̶u̶e̶s̶ ̶a̶n̶d̶ ̶n̶a̶m̶e̶ ̶t̶h̶e̶ ̶v̶a̶l̶u̶e̶s̶ ̶a̶s̶ ̶y̶o̶u̶ ̶n̶e̶e̶d̶ ̶t̶h̶e̶m̶,̶ ̶i̶r̶r̶e̶s̶p̶e̶c̶t̶i̶v̶e̶ ̶o̶f̶ ̶n̶a̶m̶e̶ ̶f̶r̶o̶m̶ ̶t̶h̶e̶ ̶n̶a̶m̶e̶ ̶t̶h̶e̶ ̶s̶e̶r̶v̶e̶r̶.̶ ̶A̶L̶s̶o̶,̶ ̶h̶a̶v̶e̶ ̶d̶e̶f̶a̶u̶l̶t̶ ̶v̶a̶l̶u̶e̶s̶ ̶w̶h̶e̶r̶e̶ ̶s̶o̶m̶e̶ ̶r̶e̶q̶u̶i̶r̶e̶d̶ ̶v̶a̶l̶u̶e̶ ̶i̶s̶ ̶e̶m̶p̶t̶y̶ ̶o̶r̶ ̶u̶n̶d̶e̶f̶i̶n̶e̶d̶ ̶o̶r̶ ̶n̶u̶l̶l̶
 ̶T̶O̶D̶O̶:̶ ̶I̶n̶s̶t̶e̶a̶d̶ ̶o̶f̶ ̶l̶o̶a̶d̶i̶n̶g̶ ̶t̶e̶x̶t̶,̶ ̶h̶a̶v̶e̶ ̶a̶ ̶b̶l̶a̶c̶k̶ ̶c̶o̶l̶o̶r̶ ̶l̶o̶a̶d̶i̶n̶g̶ ̶s̶p̶i̶n̶n̶e̶r̶,̶ ̶T̶i̶p̶:̶ ̶S̶e̶p̶a̶r̶a̶t̶e̶ ̶S̶p̶i̶n̶n̶e̶r̶ ̶C̶o̶m̶p̶o̶n̶e̶n̶t̶

Task for Tuesday:
 TODO: 1. Implement Router and Creating SingleProductPage Component, Possible challenge: passing props into routes might be problematic, so try to find something on google for this
 / -> <HomePage apiData={} />
 /products/${productId} -> <SingleProductPage apiData={}/>
 TODO: 2. Click a shoe card from homepage should redirect you to /products/${productId}
 TODO: 3. Find data for the current productId in the URL and update data state

Task for Wednesday
 Single Product Page
 TODO: 1. Create UI using data
 TODO: 2. Make the background color dynamic
 TODO: 3. Go Back Functionality: Redirect back to homepage

Task for Thursday
 TODO: 1. Make Tag Component
 TODO: 2. View image on unsplash functionality: Open new tab which should open this image on unsplash.com, Tip: data has the required link

Task for Friday:
 TODO: 1. Add to Cart functionality as explained in Figma

Task For Saturday:
  TODO: 1. When incorrect productId is passed in the route `/products/${productId}`, show No Product Found Page, and it should have button saying go back to homepage
 TODO: 2. Hover over product page should show a overlay of white

 const transformAPIDataToState = (apiData) =>{
 if(apiData.imageURL === "" || apiData.imageURL === undefined){
 return Error("imageURL missing")
 }
 return apiData.map(imageObject => ({
 name:"",
 link:"",
 price:"",
 new:"",
 title: imageObject.title === "" ? "Foreign Brand":imageObject.title
 })),
  -->


