from django.db import models

class University(models.Model):
    name = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    image = models.ImageField(upload_to="universities", blank=True, null=True)
    # establshed = models.DateTimeField(null=True)
    # students = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    

class Application(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name="applications")

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.PositiveBigIntegerField()
    email = models.EmailField()
    phone_number = models.CharField(max_length=20, null=True) 
    crated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.university.name}"