from distutils.command.upload import upload
from tkinter import CASCADE
from django.db import models


class ApplicationForm(models.Model):
    name = models.CharField(max_length=20,null=True,blank=True)
    address = models.CharField(max_length=500,null=True,blank=True)
    city = models.CharField(max_length=20,null=True,blank=True)
    state = models.CharField(max_length=20,null=True,blank=True)
    email_id = models.EmailField(max_length=50,null=True,blank=True)
    phone = models.IntegerField(null=True,blank=True)
    company_name = models.CharField(max_length=50,null=True,blank=True)
    about_background = models.CharField(max_length=500,null=True,blank=True)
    about_company = models.CharField(max_length=500,null=True,blank=True)
    about_problem = models.CharField(max_length=500,null=True,blank=True)
    about_solution = models.CharField(max_length=500,null=True,blank=True)
    about_value_proposition = models.CharField(max_length=500,null=True,blank=True)
    about_competetors = models.CharField(max_length=500,null=True,blank=True)
    about_revenue_modal = models.CharField(max_length=500,null=True,blank=True)
    about_potential = models.CharField(max_length=500,null=True,blank=True)
    about_plan = models.CharField(max_length=500,null=True,blank=True)
    incubation_type = models.CharField(max_length=20,null=True,blank=True)
    about_bussiness_proposal = models.CharField(max_length=500,null=True,blank=True)
    status = models.BooleanField(null=True,blank=True)
    slot_booked=models.BooleanField(default=False)


class CompanyLogo(models.Model):
    application_form=models.ForeignKey(ApplicationForm, on_delete=models.CASCADE,null=True,blank=True)
    company_logo=models.ImageField(null=True,blank=True,upload_to = 'media')

class MainSlotBooking(models.Model):
    application_form=models.ForeignKey(ApplicationForm, on_delete=models.CASCADE,null=True,blank=True)


class SecondarySlotBooking(models.Model):
    application_form=models.ForeignKey(ApplicationForm, on_delete=models.CASCADE,null=True,blank=True)