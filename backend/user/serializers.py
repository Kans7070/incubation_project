from dataclasses import fields
from pyexpat import model
from user.models import ApplicationForm,MainSlotBooking,SecondarySlotBooking,CompanyLogo
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['id','username','password','is_superuser',]
        extrakwargs = {'password' : {'write_only' : True , 'required' : True}}
    
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
    
class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationForm
        fields = '__all__'


class MainSlotBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainSlotBooking
        fields = '__all__'
    

class SecondarySlotBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondarySlotBooking
        fields = '__all__'


class CompanyLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyLogo
        fields = '__all__'