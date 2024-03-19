// membuat array object
const user = {
    data : {
        id: 11022,
        nama: "hasan",
        umur: 21,
    },
};

// destructing object
const {id, nama, umur} = user.data

console.log(id, nama, umur);

// membuat array
const murid = ["hasan", "wjwjw", "sdfsakdf"]

// destructing array
const [hasan, wkkwk, sadasdfads] = murid


console.log(hasan, wkkwk, sadasdfads);


/**
 * membuat function untuk rest
 */

function name(... params) {
   for (const param of params) {
    console.log(param);
   }
    
}

name("hasan", "ewkkekeke", "kskfgjsdfk");


/**
 * membuat spread
 */

const mahasiswa = {
    nama: "hasan",
    major: "informatics",
}

const newMahasiswa = {
    ...mahasiswa,
    age: 21,
}
console.log(newMahasiswa);

/**
 * forEach untuk looping dan iterasi
 */

const hahahas = ["hasabn", "david", "google"]

hahahas.forEach((hahaha)=>{
    console.log(hahaha);
})

/**
 * map : untuk transform data. yaitu mengubah data
 */

const testingFormat = hahahas.map((hahaha)=>{
    console.log(`halo ${hahaha}`);
})