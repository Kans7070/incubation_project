from django.contrib import admin

from user.models import ApplicationForm,MainSlotBooking,SecondarySlotBooking,CompanyLogo



# Register your models here.

admin.site.register(ApplicationForm)
admin.site.register(MainSlotBooking)
admin.site.register(SecondarySlotBooking)
admin.site.register(CompanyLogo)