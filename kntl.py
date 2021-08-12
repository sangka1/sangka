# jika lanjut enter
# jika berhenti n
print("enter (lanjut) / berhenti (n)!")

# jika anda memilih kurang maka akan berkurang
# jika anda memilih tambah maka akan bertambah

pilih = str(input("pilih [ kurang / tambah ] : "))

# variable a bernilai 0
a = 0

# jika anda sudah memilih kurang maka angka 
# akan terus berkurang dari -1 sampai seterusnya

if pilih == "kurang":
    
   # membuat perulangan while bernilai True
   # agar perulangannya tanpa batas
   
   while True:
     a = a - 1 # berfungsi untuk mengurangi variable a 
     print("kurang : ", a )
     
     # jika anda menginputkan n maka perulanganya
     # akan berhenti / berakhir
     
     berhenti = str(input(""):
     # jika user telah menginputkan ( n ) 
     # maka programnya akan berhenti
     
     if berhenti == "n":
        break

# jika anda sudah memilih tambah maka angka
# akan terus bertambah dari 1 sampai seterusnya

if pilih == "tambah":
    
   # membuat perulangan while bernilai True
   # agar perulangannya tanpa batas
    
   while True:
     a = a + 1 # berfungsi menambahkan variable a
     print("tambah : ", a)
     berhenti = str(input(""))
     # jika user telah menginputkan ( n ) 
     # maka programnya akan berhenti
     
     if berhenti == "n":
        break
