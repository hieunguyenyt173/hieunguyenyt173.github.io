const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]
// Viết function tính thứ hạng trung bình của cả lớp
   const tinhTrungbinh = (arr) => {
       let tb = 0;
       arr.forEach((ele) => {
           tb += ele.grade;
       })
       return tb / arr.length;
   }
   console.log(tinhTrungbinh(grades));
// Viết function tính thứ hạng trung bình của nam trong lớp
const tinhTrungBinhNam = (arr) => {
    let tb = 0;
    let stt = 0;
    arr.forEach((ele) => {
        if(ele.sex == 'M') {
            stt++;
            tb += ele.grade;
        }
    })
    return tb / stt;
}
console.log(tinhTrungBinhNam(grades))
// Viết function tính thứ hạng trung bình của Nữ trong lớp
const tinhTrungBinhNu = (arr) => {
    let tb = 0;
    let stt = 0;
    arr.forEach((ele) => {
        if(ele.sex == 'F') {
            stt++;
            tb += ele.grade;
        }
    })
    return tb / stt;
}
console.log(tinhTrungBinhNu(grades))
// Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const findBestGrade = (arr) => {
    arr.sort((a, b) => {
        return a.grade - b.grade;
    })
    return arr[0];
}
console.log(findBestGrade(grades))
// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const findBestGradeF = (arr) => {
    let listGradeF = arr.filter((ele) => ele.sex == "F");
    listGradeF.sort((a, b) => {
        return a.grade - b.grade;
    })
    return listGradeF[0];
}
console.log(findBestGradeF(grades))
// Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const findLowGradeM = (arr) => {
    let listGradeM = arr.filter((ele) => ele.sex == "M");
    listGradeM.sort((a, b) => {
        return b.grade - a.grade;
    })
    return listGradeM[0];
}
console.log(findLowGradeM(grades))
// Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const findLowGradeF = (arr) => {
    let listGradeF = arr.filter((ele) => ele.sex == "F");
    listGradeF.sort((a, b) => {
        return b.grade - a.grade;
    })
    return listGradeF[0];
}
console.log(findLowGradeF(grades))
// Viết function thứ hạng cao nhất của cả lớp
const findBestGrade_c = (arr) => {
    arr.sort((a, b) => {
        return a.grade -b.grade;
    })
    return arr[0].grade;
}
console.log(findBestGrade_c(grades))

// Viết function thứ hạng thấp nhất của cả lớp
const findLowGrade_c = (arr) => {
    arr.sort((a, b) => {
        return b.grade - a.grade;
    })
    return arr[0].grade;
}
console.log(findLowGrade_c(grades))
// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const listFemale = (arr) => {
    return arr.filter((ele) => ele.sex == "F");
}
console.log(listFemale(grades))
// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const sortName = (arr) => {
   return arr.sort((a, b) => {
        let fa = a.name.toLowerCase();
        let fb = b.name.toLowerCase();
        if(fa < fb) {
            return -1;
        }
        else if(fa > fb) {
            return 1;
        }
        else {
            return 0;
        }
    });
}
console.log(sortName(grades))
// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const sortGrade = (arr) => {
    return arr.sort((a, b) => {
        return a.grade - b.grade;
    });
}
console.log(sortGrade(grades))
// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const findName = (arr) => {
    return arr.filter((ele) => ele.name[0] == 'J');
}
console.log(findName(grades))

// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const listGrade = (arr) => {
    arr.sort((a, b) => {
        return a.grade - b.grade;
    });
    return arr.slice(0, 5);
}
console.log(listGrade(grades))
