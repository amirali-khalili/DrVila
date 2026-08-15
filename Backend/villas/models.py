from django.db import models



class Villa(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    address = models.CharField(max_length=300)
    price = models.PositiveIntegerField()
    poster = models.ImageField(upload_to='villas/')
    
    land_area = models.PositiveIntegerField(null=True,blank=True)
    building_area = models.PositiveIntegerField(null=True,blank=True)
    room_count = models.PositiveIntegerField(null=True,blank=True)
    bathroom_count = models.PositiveIntegerField(null=True,blank=True)
    parking_count = models.PositiveIntegerField(null=True,blank=True)
    construction_year = models.PositiveIntegerField(null=True,blank=True)   
    
    # Features
    pool = models.BooleanField(default=False)
    deed = models.BooleanField(default=False)
    furnished = models.BooleanField(default=False)
    caretaker = models.BooleanField(default=False)
    roof = models.BooleanField(default=False)
    
    
    
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    

class VillaImage(models.Model):
    villa = models.ForeignKey(
        Villa,
        on_delete=models.CASCADE,
        related_name='images'
    )
    image = models.ImageField(upload_to='villas/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.villa.title} - image"
    
    
