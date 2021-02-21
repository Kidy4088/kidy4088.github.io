### 1.生成rsa私钥，文本存储格式，长度2048

```shell
openssl genrsa -out rsa_private_key.pem 2048
```

### 2.根据私钥生成对应的公钥

```shell
openssl rsa -in rsa_private_key.pem -pubout -out rsa_public_key_2048.pub
```

### 3.私钥转化成pkcs8格式

```shell
openssl pkcs8 -topk8 -inform PEM -in rsa_private_key.pem -outform PEM -nocrypt > rsa_private_key_pkcs8.pem
```









