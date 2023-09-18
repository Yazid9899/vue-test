<template>
  <section>
    <div class="main-container">
      <div class="row-1 border blue">
        <span class="centered-text">1</span>
      </div>
      <div class="row-2">
        <div class="row-2-col border blue">
          <span class="centered-text">2</span>
        </div>
        <div class="row-2-col border blue">
          <span class="centered-text">3</span>
        </div>
      </div>
      <div class="row-3">
        <div class="row-3-col-1">
          <div class="row-3-big border blue">
            <div class="row-3-red border red">
              <span class="centered-text">4</span>
            </div>
          </div>
          <div class="row-3-col-1-row-2">
            <div class="row-3-blue border blue">
              <span class="centered-text">5</span>
            </div>
            <div class="row-3-blue border blue">
              <span class="centered-text">6</span>
            </div>
            <div class="row-3-blue border blue">
              <span class="centered-text">7</span>
            </div>
          </div>
        </div>
        <div class="row-3-col-2 border blue">
          <div class="row-3-cell border red">
            <span class="centered-text">8</span>
          </div>
          <div class="row-3-cell border red">
            <span class="centered-text">9</span>
          </div>
          <div class="row-3-cell border red">
            <span class="centered-text">10</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="bottom-main border blue">
        <div class="bottom-row">
          <div class="red-box">
          </div>
          <div class="red-box random-1">
          </div>
          <div class="white-box random-4">
          </div>
        </div>
        <div class="bottom-row">
          <div class="red-box random-2">
          </div>
          <div class="red-box random-3">
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
@media (max-width: 650px) {
  .main-container {
   height: 100vh;
  }

  .bottom-container {
    display: none;
  }

  .row-2,.row-3 {
    display: flex;
    flex-direction: column;
  }

  .row-2-col {
    flex-grow: initial; 
  }

  .row-3-col-1 {
    width: 100% !important;
  }

  .row-3-big {
    height: 15rem !important; 
  }
  


  .row-3-col-1 {
    width: 100%; /* Make the first column take full width */
  }

  .row-3-col-2 {
    display: flex;
    flex-grow: 1;
    width: 98.5% !important;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .row-3-cell {
    margin: 0px;
    width: 10rem;
  }
  .row-3-col-1-row-2 {
    width: 100%; /* Make the inner columns take full width */
  }
  
}

.bottom-container {
  margin-top: 3rem;
}

.bottom-main {
  height: 10rem;
  width: 50%;
}

.bottom-row {
  display: flex;
  margin-bottom: 2rem;
} 

.white-box {
  width: 6rem;
  height: 8rem;
  background-color: white;
  position: absolute;
  left: 7%;
  top: 70%;
}


.red-box {
  width: 10rem;
  height: 4rem;
  background-color: red;
}

.random-1 {
  position: absolute;
  left: 45%; 
}

.random-2 {
  position: absolute;
  left: 8%; 
}

.random-3 {
  position: absolute;
  left: 60%;   
}

section {
  margin: 0;
  max-width: 100vw;
  max-height: 100vh;
  margin: 10px 10px;
}

.centered-text {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100%; 
}
.main-container {
  height: 60vh;
  text-align: center;
  color: white;
  place-items: center;
}

.border {
  border: 5px solid black;
}

.blue {
  background-color: blue;
}

.red {
  background-color: red;
}

.row-1 {
  height: 5rem;
}

.row-2 {
  display: flex;
}

.row-2-col {
  flex-grow: 1; 
  height: 4rem;
}

.row-3 {
  display: flex;
  height: 19rem;
}

.row-3-col-1 {
  width: 60%;
}

.row-3-col-2 {
  width: 40%;
}

.row-3-big {
  height: 75%;
}

.row-3-col-1-row-2 {
  display: flex;
  height: 22%;
}

.row-3-blue {
  flex-grow: 1;
}

.row-3-red{
  margin: 5px;
  height: 70%;
}

.row-3-cell {
  margin: 10px;
  height: 4rem;
}
</style>
